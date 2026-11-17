// Renders problem figures to HTML strings. Pure functions: no DOM access.
// Charts are drawn with CSS classes (see styles.css) so they follow the theme.

const WIDTH = 360;

function niceCeiling(value) {
  if (value <= 0) return 1;
  const exponent = Math.floor(Math.log10(value));
  const base = 10 ** exponent;
  for (const step of [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) {
    if (value <= step * base) return step * base;
  }
  return 10 * base;
}

function niceStep(max) {
  for (const divisions of [5, 4, 6, 3, 10]) {
    const step = max / divisions;
    if (Number.isInteger(step) || Number.isInteger(step * 2)) return step;
  }
  return max / 5;
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : String(Math.round(value * 100) / 100);
}

function axisFrame({ labels, series, yMax, title, xLabel, yLabel, escape }) {
  const left = 46;
  const right = 14;
  const top = title ? 34 : 14;
  const bottom = xLabel ? 56 : 40;
  const height = 230;
  const plotWidth = WIDTH - left - right;
  const plotHeight = height - top - bottom;
  const step = niceStep(yMax);
  const ticks = [];
  for (let value = 0; value <= yMax + 1e-9; value += step) ticks.push(value);
  const y = (value) => top + plotHeight - (value / yMax) * plotHeight;
  let svg = "";
  if (title) svg += `<text class="fig-title" x="${WIDTH / 2}" y="18" text-anchor="middle">${escape(title)}</text>`;
  for (const tick of ticks) {
    svg += `<line class="fig-grid" x1="${left}" x2="${WIDTH - right}" y1="${y(tick)}" y2="${y(tick)}"/>`;
    svg += `<text class="fig-label" x="${left - 6}" y="${y(tick) + 4}" text-anchor="end">${formatNumber(tick)}</text>`;
  }
  svg += `<line class="fig-axis" x1="${left}" x2="${left}" y1="${top}" y2="${top + plotHeight}"/>`;
  svg += `<line class="fig-axis" x1="${left}" x2="${WIDTH - right}" y1="${top + plotHeight}" y2="${top + plotHeight}"/>`;
  const band = plotWidth / labels.length;
  labels.forEach((label, index) => {
    svg += `<text class="fig-label" x="${left + band * (index + 0.5)}" y="${top + plotHeight + 16}" text-anchor="middle">${escape(label)}</text>`;
  });
  if (xLabel) svg += `<text class="fig-label" x="${left + plotWidth / 2}" y="${height - 8}" text-anchor="middle">${escape(xLabel)}</text>`;
  if (yLabel) svg += `<text class="fig-label" transform="translate(12 ${top + plotHeight / 2}) rotate(-90)" text-anchor="middle">${escape(yLabel)}</text>`;
  let legend = "";
  if (series.length > 1) {
    legend = `<ul class="fig-legend">${series.map((entry, index) => `<li><span class="fig-swatch fig-series-${index}"></span>${escape(entry.nameEn)}</li>`).join("")}</ul>`;
  }
  return { svg, legend, geometry: { left, top, plotWidth, plotHeight, band, height, y } };
}

function chartSvg(inner, height, label, escape) {
  return `<svg class="fig-chart" viewBox="0 0 ${WIDTH} ${height}" role="img" aria-label="${escape(label)}">${inner}</svg>`;
}

function barChart(figure, label, escape) {
  const max = niceCeiling(Math.max(...figure.series.flatMap((entry) => entry.values)));
  const frame = axisFrame({
    labels: figure.labels.map(String),
    series: figure.series,
    yMax: max,
    title: figure.titleEn,
    xLabel: figure.xLabelEn,
    yLabel: figure.yLabelEn,
    escape
  });
  const { left, band, y, top, plotHeight } = frame.geometry;
  const groupWidth = band * 0.72;
  const barWidth = groupWidth / figure.series.length;
  let bars = "";
  figure.series.forEach((entry, seriesIndex) => {
    entry.values.forEach((value, index) => {
      const x = left + band * index + (band - groupWidth) / 2 + barWidth * seriesIndex;
      bars += `<rect class="fig-bar fig-series-${seriesIndex}" x="${x.toFixed(1)}" y="${y(value).toFixed(1)}" width="${(barWidth - 1).toFixed(1)}" height="${(top + plotHeight - y(value)).toFixed(1)}"/>`;
    });
  });
  return chartSvg(frame.svg + bars, frame.geometry.height, label, escape) + frame.legend;
}

function lineChart(figure, label, escape) {
  const max = niceCeiling(Math.max(...figure.series.flatMap((entry) => entry.values)));
  const frame = axisFrame({
    labels: figure.labels.map(String),
    series: figure.series,
    yMax: max,
    title: figure.titleEn,
    xLabel: figure.xLabelEn,
    yLabel: figure.yLabelEn,
    escape
  });
  const { left, band, y } = frame.geometry;
  let lines = "";
  figure.series.forEach((entry, seriesIndex) => {
    const points = entry.values.map((value, index) => [left + band * (index + 0.5), y(value)]);
    lines += `<polyline class="fig-line fig-series-${seriesIndex}" points="${points.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ")}"/>`;
    for (const [px, py] of points) lines += `<circle class="fig-dot fig-series-${seriesIndex}" cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.5"/>`;
  });
  return chartSvg(frame.svg + lines, frame.geometry.height, label, escape) + frame.legend;
}

function pieChart(figure, label, escape) {
  const total = figure.slices.reduce((sum, slice) => sum + slice.value, 0);
  const isPercent = Math.abs(total - 100) < 1e-9;
  const cx = WIDTH / 2;
  const cy = 128;
  const radius = 78;
  let angle = -Math.PI / 2;
  let svg = figure.titleEn ? `<text class="fig-title" x="${cx}" y="16" text-anchor="middle">${escape(figure.titleEn)}</text>` : "";
  figure.slices.forEach((slice, index) => {
    const sweep = (slice.value / total) * Math.PI * 2;
    const next = angle + sweep;
    const mid = angle + sweep / 2;
    const [x1, y1] = [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
    const [x2, y2] = [cx + radius * Math.cos(next), cy + radius * Math.sin(next)];
    const large = sweep > Math.PI ? 1 : 0;
    const path = figure.slices.length === 1
      ? `M ${cx - radius} ${cy} a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 ${-radius * 2} 0`
      : `M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${radius} ${radius} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
    svg += `<path class="fig-slice fig-slice-${index % 8}" d="${path}"/>`;
    const lx = cx + (radius + 16) * Math.cos(mid);
    const ly = cy + (radius + 16) * Math.sin(mid);
    const anchor = Math.cos(mid) > 0.2 ? "start" : Math.cos(mid) < -0.2 ? "end" : "middle";
    svg += `<text class="fig-label" x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" text-anchor="${anchor}">${escape(slice.label)} ${formatNumber(slice.value)}${isPercent ? "%" : ""}</text>`;
    angle = next;
  });
  return chartSvg(svg, 256, label, escape);
}

function tableFigure(figure, renderCell, escape) {
  return `
    <table class="figure-table">
      ${figure.captionEn ? `<caption>${escape(figure.captionEn)}</caption>` : ""}
      <thead><tr>${figure.headers.map((cell) => `<th scope="col">${renderCell(cell)}</th>`).join("")}</tr></thead>
      <tbody>${figure.rows.map((row) => `<tr>${row.map((cell, index) => (index === 0 ? `<th scope="row">${renderCell(cell)}</th>` : `<td>${renderCell(cell)}</td>`)).join("")}</tr>`).join("")}</tbody>
    </table>`;
}

// `alt` is the text description for assistive technology (already language-aware).
export function renderFigure(figure, { alt, escape, renderCell }) {
  let body;
  if (figure.kind === "svg") {
    body = `<div class="figure-svg" role="img" aria-label="${escape(alt)}">${figure.svg}</div>`;
  } else if (figure.kind === "table") {
    body = tableFigure(figure, renderCell, escape);
  } else if (figure.kind === "bar") {
    body = barChart(figure, alt, escape);
  } else if (figure.kind === "line") {
    body = lineChart(figure, alt, escape);
  } else if (figure.kind === "pie") {
    body = pieChart(figure, alt, escape);
  } else {
    throw new Error(`Unknown figure kind: ${figure.kind}`);
  }
  return `<figure class="problem-figure problem-figure-${figure.kind}">${body}</figure>`;
}
