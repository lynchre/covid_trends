import json

full_file = open('data/us-states.json',mode='r')
data_file = open('data.json', mode='r')

full_s = full_file.read()
data_s = data_file.read()

full = json.loads(full_s)
data = json.loads(data_s)

for i in range(0,50):
    print(data[i]['name'])
    print(full['features'][i]['properties']['NAME'])
    if full['features'][i]['properties']['NAME'] == 'District of Columbia':
        continue
    if data[i]['name'] != full['features'][i]['properties']['NAME']:
        print("error!")
        exit(1)
    full['features'][i]['properties']['googleData'] = data[i]['googleData']
    full['features'][i]['properties']['covidData'] = data[i]['covidData']

with open('data/data.json', 'w') as f:
    json.dump(full, f)
