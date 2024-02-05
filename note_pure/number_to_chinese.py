def number_to_chinese(number):
    chinese_nums = {
        0: '零',
        1: '壹',
        2: '貳',
        3: '叁',
        4: '肆',
        5: '伍',
        6: '陸',
        7: '柒',
        8: '捌',
        9: '玖',
        10: '拾',
        100: '佰',
        1000: '仟',
        10000: '萬'
    }

    result = ""
    digits = str(number)

    if number == 0:
        return chinese_nums[number]

    for i, digit in enumerate(digits):
        position = len(digits) - i - 1

        # 处理零的情况
        if digit == '0':
            # 如果当前位置非个位且前一位不是零，则添加零
            if position > 0 and digits[i-1] != '0':
                result += chinese_nums[0]
            continue

        # 添加数字和单位
        result += chinese_nums[int(digit)]
        if position > 0:
            result += chinese_nums[10 ** position]

    return result
