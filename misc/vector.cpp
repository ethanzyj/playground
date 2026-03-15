#include <iostream>
#include <vector>

using namespace std;

int main() {
	// 1. 创建与初始化
	vector<int> v1;               // 空vector
	vector<int> v2(5);            // 5个元素，默认值为0
	vector<int> v3(5, 10);        // 5个元素，值均为10
	vector<int> v4{1, 2, 3, 4};   // 列表初始化

	// 2. 常用容量操作
	cout << "size: " << v4.size() << '\n';
	cout << "capacity: " << v4.capacity() << '\n';
	cout << "empty: " << (v4.empty() ? "true" : "false") << '\n';

	// 3. 元素访问
	v4[0] = 9;           // 下标访问，越界行为未定义
	v4.at(1) = 8;        // 安全访问，越界会抛异常
	cout << "front: " << v4.front() << '\n';
	cout << "back: " << v4.back() << '\n';

	// 4. 修改操作
	v4.push_back(5);     // 尾部插入
	v4.pop_back();       // 尾部删除
	v4.insert(v4.begin() + 1, 99); // 指定位置插入
	v4.erase(v4.begin());          // 删除首元素
	v4.clear();          // 清空所有元素

	// 5. 迭代器遍历
	for (auto it = v3.begin(); it != v3.end(); ++it) {
		cout << *it << ' ';
	}
	cout << '\n';

	// 6. 范围for遍历
	for (int val : v3) {
		cout << val << ' ';
	}
	cout << '\n';

	// 7. 预留空间，减少扩容开销
	v1.reserve(100);
	cout << "after reserve capacity: " << v1.capacity() << '\n';

	// 8. 调整大小
	v1.resize(10, 7);    // 扩展至10个元素，新元素值为7
	cout << "after resize size: " << v1.size() << '\n';

	return 0;
}
