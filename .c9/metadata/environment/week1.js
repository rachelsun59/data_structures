{"changed":true,"filter":false,"title":"week1.js","tooltip":"/week1.js","value":"// npm install request\n// mkdir data\n\nvar request = require('request');\nvar fs = require('fs');\n\nrequest('https://parsons.nyc/aa/m01.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo1.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m02.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo2.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\n\nrequest('https://parsons.nyc/aa/m03.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo3.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m04.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo4.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m05.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo5.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m06.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo6.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m07.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo7.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m08.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo8.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m09.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo9.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\nrequest('https://parsons.nyc/aa/m10.html', function(error, response, body){\n    if (!error && response.statusCode == 200) {\n        fs.writeFileSync('/home/ec2-user/environment/data/mo10.txt', body);\n    }\n    else {console.log(\"Request failed!\")}\n});\n\n\n","undoManager":{"mark":90,"position":100,"stack":[[{"start":{"row":43,"column":34},"end":{"row":43,"column":35},"action":"remove","lines":["2"],"id":45}],[{"start":{"row":43,"column":34},"end":{"row":43,"column":35},"action":"insert","lines":["6"],"id":46}],[{"start":{"row":45,"column":60},"end":{"row":45,"column":61},"action":"remove","lines":["2"],"id":47}],[{"start":{"row":45,"column":60},"end":{"row":45,"column":61},"action":"insert","lines":["6"],"id":48}],[{"start":{"row":48,"column":3},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":50,"column":0},"end":{"row":55,"column":3},"action":"insert","lines":["request('https://parsons.nyc/aa/m02.html', function(error, response, body){","    if (!error && response.statusCode == 200) {","        fs.writeFileSync('/home/ec2-user/environment/data/mo2.txt', body);","    }","    else {console.log(\"Request failed!\")}","});"],"id":50}],[{"start":{"row":50,"column":34},"end":{"row":50,"column":35},"action":"remove","lines":["2"],"id":51}],[{"start":{"row":50,"column":34},"end":{"row":50,"column":35},"action":"insert","lines":["7"],"id":52},{"start":{"row":50,"column":35},"end":{"row":50,"column":36},"action":"insert","lines":["7"]},{"start":{"row":50,"column":36},"end":{"row":50,"column":37},"action":"insert","lines":["7"]}],[{"start":{"row":50,"column":36},"end":{"row":50,"column":37},"action":"remove","lines":["7"],"id":53},{"start":{"row":50,"column":35},"end":{"row":50,"column":36},"action":"remove","lines":["7"]}],[{"start":{"row":52,"column":60},"end":{"row":52,"column":61},"action":"remove","lines":["2"],"id":54}],[{"start":{"row":52,"column":60},"end":{"row":52,"column":61},"action":"insert","lines":["7"],"id":55},{"start":{"row":52,"column":61},"end":{"row":52,"column":62},"action":"insert","lines":["7"]},{"start":{"row":52,"column":62},"end":{"row":52,"column":63},"action":"insert","lines":["7"]}],[{"start":{"row":52,"column":62},"end":{"row":52,"column":63},"action":"remove","lines":["7"],"id":56},{"start":{"row":52,"column":61},"end":{"row":52,"column":62},"action":"remove","lines":["7"]}],[{"start":{"row":55,"column":3},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":57},{"start":{"row":56,"column":0},"end":{"row":57,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":57,"column":0},"end":{"row":62,"column":3},"action":"insert","lines":["request('https://parsons.nyc/aa/m02.html', function(error, response, body){","    if (!error && response.statusCode == 200) {","        fs.writeFileSync('/home/ec2-user/environment/data/mo2.txt', body);","    }","    else {console.log(\"Request failed!\")}","});"],"id":58}],[{"start":{"row":57,"column":34},"end":{"row":57,"column":35},"action":"remove","lines":["2"],"id":59}],[{"start":{"row":57,"column":34},"end":{"row":57,"column":35},"action":"insert","lines":["8"],"id":60}],[{"start":{"row":59,"column":60},"end":{"row":59,"column":61},"action":"remove","lines":["2"],"id":61}],[{"start":{"row":59,"column":60},"end":{"row":59,"column":61},"action":"insert","lines":["8"],"id":62}],[{"start":{"row":62,"column":3},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":63},{"start":{"row":63,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":64,"column":0},"end":{"row":69,"column":3},"action":"insert","lines":["request('https://parsons.nyc/aa/m02.html', function(error, response, body){","    if (!error && response.statusCode == 200) {","        fs.writeFileSync('/home/ec2-user/environment/data/mo2.txt', body);","    }","    else {console.log(\"Request failed!\")}","});"],"id":64}],[{"start":{"row":64,"column":34},"end":{"row":64,"column":35},"action":"remove","lines":["2"],"id":65}],[{"start":{"row":64,"column":34},"end":{"row":64,"column":35},"action":"insert","lines":["9"],"id":66}],[{"start":{"row":66,"column":60},"end":{"row":66,"column":61},"action":"remove","lines":["2"],"id":67}],[{"start":{"row":66,"column":60},"end":{"row":66,"column":61},"action":"insert","lines":["1"],"id":68},{"start":{"row":66,"column":61},"end":{"row":66,"column":62},"action":"insert","lines":["0"]}],[{"start":{"row":66,"column":61},"end":{"row":66,"column":62},"action":"remove","lines":["0"],"id":69},{"start":{"row":66,"column":60},"end":{"row":66,"column":61},"action":"remove","lines":["1"]}],[{"start":{"row":66,"column":60},"end":{"row":66,"column":61},"action":"insert","lines":["9"],"id":70}],[{"start":{"row":69,"column":3},"end":{"row":70,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":70,"column":0},"end":{"row":71,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":71,"column":0},"end":{"row":76,"column":3},"action":"insert","lines":["request('https://parsons.nyc/aa/m02.html', function(error, response, body){","    if (!error && response.statusCode == 200) {","        fs.writeFileSync('/home/ec2-user/environment/data/mo2.txt', body);","    }","    else {console.log(\"Request failed!\")}","});"],"id":72}],[{"start":{"row":71,"column":34},"end":{"row":71,"column":35},"action":"remove","lines":["2"],"id":73},{"start":{"row":71,"column":33},"end":{"row":71,"column":34},"action":"remove","lines":["0"]}],[{"start":{"row":71,"column":33},"end":{"row":71,"column":34},"action":"insert","lines":["1"],"id":74},{"start":{"row":71,"column":34},"end":{"row":71,"column":35},"action":"insert","lines":["0"]}],[{"start":{"row":73,"column":60},"end":{"row":73,"column":61},"action":"remove","lines":["2"],"id":75}],[{"start":{"row":73,"column":60},"end":{"row":73,"column":61},"action":"insert","lines":["1"],"id":76},{"start":{"row":73,"column":61},"end":{"row":73,"column":62},"action":"insert","lines":["0"]}],[{"start":{"row":76,"column":3},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":77}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["/"],"id":78},{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":[" "],"id":79}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"remove","lines":[" "],"id":80},{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"remove","lines":["/"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":["/"]},{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "],"id":81}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["/"],"id":82},{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"remove","lines":["/"],"id":83},{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"remove","lines":["/"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":84}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["/"],"id":88},{"start":{"row":13,"column":1},"end":{"row":13,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"insert","lines":["/"],"id":89},{"start":{"row":21,"column":1},"end":{"row":21,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":21,"column":1},"end":{"row":21,"column":2},"action":"remove","lines":["/"],"id":90},{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":91},{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"insert","lines":["/"]},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"remove","lines":["/"],"id":92},{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"insert","lines":["."],"id":93},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"insert","lines":["/"]},{"start":{"row":77,"column":2},"end":{"row":77,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":77,"column":2},"end":{"row":77,"column":3},"action":"remove","lines":["/"],"id":94},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"remove","lines":["/"]},{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"remove","lines":["."]}],[{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"insert","lines":["/"],"id":95},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"insert","lines":["/"]},{"start":{"row":77,"column":2},"end":{"row":77,"column":3},"action":"insert","lines":["."]}],[{"start":{"row":77,"column":2},"end":{"row":77,"column":3},"action":"remove","lines":["."],"id":96},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"remove","lines":["/"]},{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"insert","lines":["="],"id":97}],[{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"remove","lines":["="],"id":98}],[{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"insert","lines":["-"],"id":99},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"insert","lines":["/"]},{"start":{"row":77,"column":2},"end":{"row":77,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":77,"column":2},"end":{"row":77,"column":3},"action":"remove","lines":["/"],"id":100},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"remove","lines":["/"]},{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"remove","lines":["-"]}],[{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"insert","lines":["_"],"id":101},{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"insert","lines":["_"]}],[{"start":{"row":77,"column":1},"end":{"row":77,"column":2},"action":"remove","lines":["_"],"id":102},{"start":{"row":77,"column":0},"end":{"row":77,"column":1},"action":"remove","lines":["_"]}],[{"start":{"row":13,"column":1},"end":{"row":13,"column":2},"action":"remove","lines":["/"],"id":124},{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":125},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["f"]},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["o"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":[" "],"id":126},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["v"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["a"]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":[" "],"id":127},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["i"]}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":[" "],"id":128}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":[" "],"id":129},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["i"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"remove","lines":[" "]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":["r"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"remove","lines":["a"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"remove","lines":["v"]},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":[" "],"id":130}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":6},"action":"insert","lines":["()"],"id":131}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["v"],"id":132},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["a"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["r"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":[":"]}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":[" "],"id":133}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":[" "],"id":134},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":[":"]}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":[" "],"id":135},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["i"]}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":[" "],"id":136}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":[" "],"id":137}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":[";"],"id":138}],[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":[" "],"id":139},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["i"]}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":[" "],"id":140}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"remove","lines":[" "],"id":141},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":["i"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"remove","lines":[" "]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":[";"]}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":[" "],"id":142},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["="]}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":[" "],"id":143}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":[" "],"id":144}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["0"],"id":145}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":[" "],"id":146}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"remove","lines":[" "],"id":147},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":["0"]}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":[" "],"id":148},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["0"]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":[" "],"id":149},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":[";"]}],[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"remove","lines":[";"],"id":150},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":[" "]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":[";"],"id":151}],[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":[" "],"id":152},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["i"]}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":[" "],"id":153},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["<"]}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":[" "],"id":154},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["x"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["y"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["z"]},{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"insert","lines":[";"]}],[{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"insert","lines":[" "],"id":155},{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"insert","lines":["i"]},{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":["+"]},{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["+"]}],[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":[" "],"id":156},{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["{"]}],[{"start":{"row":7,"column":31},"end":{"row":9,"column":1},"action":"insert","lines":["","    ","}"],"id":157}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":158},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "],"id":159}],[{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"insert","lines":["",""],"id":160},{"start":{"row":78,"column":0},"end":{"row":78,"column":1},"action":"insert","lines":["w"]}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":1},"action":"remove","lines":["w"],"id":161}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":1},"action":"insert","lines":["v"],"id":162},{"start":{"row":78,"column":1},"end":{"row":78,"column":2},"action":"insert","lines":["a"]},{"start":{"row":78,"column":2},"end":{"row":78,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":78,"column":2},"end":{"row":78,"column":3},"action":"remove","lines":["t"],"id":163}],[{"start":{"row":78,"column":2},"end":{"row":78,"column":3},"action":"insert","lines":["r"],"id":164}],[{"start":{"row":78,"column":3},"end":{"row":78,"column":4},"action":"insert","lines":[" "],"id":165},{"start":{"row":78,"column":4},"end":{"row":78,"column":5},"action":"insert","lines":["n"]},{"start":{"row":78,"column":5},"end":{"row":78,"column":6},"action":"insert","lines":["u"]},{"start":{"row":78,"column":6},"end":{"row":78,"column":7},"action":"insert","lines":["m"]},{"start":{"row":78,"column":7},"end":{"row":78,"column":8},"action":"insert","lines":["="]}],[{"start":{"row":78,"column":8},"end":{"row":78,"column":9},"action":"insert","lines":["1"],"id":166},{"start":{"row":78,"column":9},"end":{"row":78,"column":10},"action":"insert","lines":[";"]}],[{"start":{"row":78,"column":7},"end":{"row":78,"column":8},"action":"insert","lines":[" "],"id":167}],[{"start":{"row":78,"column":9},"end":{"row":78,"column":10},"action":"insert","lines":[" "],"id":168}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":12},"action":"remove","lines":["var num = 1;"],"id":169}]]},"ace":{"folds":[],"scrolltop":82.5,"scrollleft":0,"selection":{"start":{"row":8,"column":8},"end":{"row":10,"column":41},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1535474762614}