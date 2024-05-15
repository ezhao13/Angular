call ng build --aot=true --output-path ..\WebContent\userManAngular --outputHashing=all --source-map=false
call rename "..\WebContent\userManAngular\index.html" "index.jsp"
