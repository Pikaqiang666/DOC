import os
import re
import json
import datetime

def merge_json_files(folder_path, prefix):
    # 匹配文件名的正则表达式
    pattern = prefix + r"_\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}\.json"

    # 获取所有符合命名规则的文件名及其对应的时间
    file_list = []
    for filename in os.listdir(folder_path):
        if re.match(pattern, filename):
            file_path = os.path.join(folder_path, filename)
            timestamp_str = re.search(r"(\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2})", filename).group(1)
            timestamp = datetime.datetime.strptime(timestamp_str, "%Y-%m-%d-%H-%M-%S")
            file_list.append((file_path, timestamp))

    # 按时间排序文件列表
    file_list.sort(key=lambda x: x[1])

    # 拼接所有JSON数据
    result = {}
    for file_path, _ in file_list:
        with open(file_path, "r") as file:
            data = json.load(file)
            result.update(data)

    # 返回合并后的数据
    return result
