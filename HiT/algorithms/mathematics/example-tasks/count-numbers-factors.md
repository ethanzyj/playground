# Count Number's Factors

Source: [https://www.hiredintech.com/algorithms/mathematics/example-tasks/count-numbers-factors/](https://www.hiredintech.com/algorithms/mathematics/example-tasks/count-numbers-factors/)

## Task Statement

Count all integer factors of a positive integer N (including 1 and N). N in [1, 10^12].

Sample: 12 -> 6 (factors: 1, 2, 3, 4, 6, 12)

## Solution

All factors of N are products of subsets of its prime factors. Group prime factors by value. If Gi is the count of the i-th group: answer = (G1+1) * (G2+1) * ... * (Gk+1).

Example: 12 = 2*2*3. Groups: {2: count 2}, {3: count 1}. Answer: (2+1)*(1+1) = 6.

To find prime factors efficiently: only iterate up to sqrt(N). Use the Sieve of Eratosthenes for prime checking.

```ruby
limit = Math.sqrt(n).to_i
is_prime = [true] * limit
i = 2
ans = 1
while i <= limit
  if is_prime[i]
    cnt = 0
    while n % i == 0
      n /= i
      cnt += 1
    end
    ans *= (cnt + 1)
    j = i*i
    while j <= limit
      is_prime[j] = false
      j += i
    end
  end
  i += 1
end
ans *= 2 if n > 1
```


---

# 因子计数

来源：[https://www.hiredintech.com/algorithms/mathematics/example-tasks/count-numbers-factors/](https://www.hiredintech.com/algorithms/mathematics/example-tasks/count-numbers-factors/)

## 题目描述

计算正整数 N 的所有整数因子数（包括 1 和 N 本身）。N 范围 [1, 10^12]。

示例：12 -> 6（因子：1、2、3、4、6、12）

## 解答

N 的所有因子都是其质因子子集的乘积。按值分组质因子。如果 Gi 是第 i 组的个数：答案 = (G1+1) * (G2+1) * ... * (Gk+1)。

示例：12 = 2*2*3。分组：{2: 个数 2}，{3: 个数 1}。答案：(2+1)*(1+1) = 6。

高效找质因子：只遍历到 sqrt(N)。使用埃拉托斯特尼筛法进行质数检查。
