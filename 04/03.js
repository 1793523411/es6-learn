var template = `
<ul>
    <% for(var i = 0;i<data.supplies.length; i++) { %>
        <li><%= data.supplies[i] %></li>
    <% } %>
</ul>
`;

// echo('<ul>')
// for(var i = 0;i<data.supplies.length;i++){
//     echo('<li>')
//     echo(data.supplies[i])
//     echo('</ll>')
// }
// echo('</ul>')

function compile(template) {
  var evalExpr = /<%=(.+?)%>/g;
  var expr = /<%([\s\S]+?%>)/g;
  template = template
    .replace(evalExpr, "`); \n echo($1); \n echo(`")
    .replace(expr, "`); \n $1 \n echo(`");
  template = "echo(`" + template + "`);";
  var script = `
    (function parse(data){
        var output = ""

        function echo(html){
            output += html
        }

        ${template}
        return output
    })
`;

  return script;
}

var parse = eval(compile(template))
var div = document.querySelectorAll('div')[0]
// console.log(div)
div.innerHtml = parse({supplise: ["broom","mop","cleaner"]})

// var evalExpr = /<%=(.+?)%>/g;
// var expr = /<%([\s\S]+?%>)/g;
// template = "echo(`" + template + "`);";

// var script = `
//     (function parse(data){
//         var output = ""

//         function echo(html){
//             output += html
//         }

//         ${template}
//         return output
//     })
// `;

// return script;
