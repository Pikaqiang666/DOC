import json
import datetime
from number_to_chinese import number_to_chinese as ntc
from merge_file import merge_json_files as mf
content = {}
fileheader = ''
while True:
    mfif=''
    mfif = input("Do you want merge file?[y]/[n]:\t")
    if mfif == "y":
        fileheader = input("Please input fileperfix:\t")
        content = mf("./", fileheader)
        break
    elif mfif == "n":
        break
    else:
        print('Please input right value')
canif = True
header_number = 0
while canif:
    header_number = header_number + 1
    header_number_show = ntc(header_number)
    print(f"Header_{header_number_show}=====================================")
    pianduan = {}
    head = input('The Header:\t')
    pianduan['text'] = input('header_TEXT:\t')
    options = []
    optionsif = True
    op_number = 0
    while optionsif:
        op_number = op_number + 1
        op_number_show = ntc(op_number)
        print(f"Option_{op_number_show}--------------------")
        option = {}
        option['text'] = input('option_Text:\t')
        option['next'] = input('option_Next:\t')
        options.append(option)
        while True:
            jixu = ''
            jixu = input('continue?[y]/[n]\t')
            if jixu == "y":
                break
            elif jixu == "n"'':
                optionsif = False
                break
            else:
                print('Please input right value')
    pianduan['options'] = options
    print(f"{head}:{pianduan}")
    content[head] = pianduan
    while True:
        go = ''
        go = input('continue next header?[y]/[n]\t')
        if go == 'y':
            break
        elif go == 'n':
            canif = False
            break
        else:
            print('Please input right value')

print('END==========================================')
complete = json.dumps(content, ensure_ascii=False)
print(complete)
now_time = datetime.datetime.now()
if fileheader == '':
    fileheader =input("filename title:\t")
filename =fileheader + '_' + now_time.strftime("%Y-%m-%d-%H-%M-%S") + ".json"
with open(filename, "w") as file:
    file.write(complete)
print('OK===========================================\n')



