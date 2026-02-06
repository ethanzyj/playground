# 示例程序：使用 dict, sort 和命令行输入

def main():
    # 读取测试用例数量
    n = int(input())
    
    # 使用字典存储数据
    data_dict = {}
    
    # 读取 n 行输入
    for _ in range(n):
        line = input().split()
        name = line[0]  # 字符串
        score = int(line[1])  # 整数
        data_dict[name] = score
    
    # 按值排序（降序）
    sorted_items = sorted(data_dict.items(), key=lambda x: x[1], reverse=True)
    
    # 输出排序结果
    print("\n排序结果：")
    for name, score in sorted_items:
        print(f"{name}: {score}")
    
    # 也可以按键排序
    print("\n按名字排序：")
    sorted_by_name = sorted(data_dict.items(), key=lambda x: x[0])
    for name, score in sorted_by_name:
        print(f"{name}: {score}")

if __name__ == "__main__":
    main()