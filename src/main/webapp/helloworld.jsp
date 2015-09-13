<%--
  Created by IntelliJ IDEA.
  User: 20150831
  Date: 2015/9/13
  Time: 14:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
  <script src="/static/scripts/jquery-1.4.1.js"></script>
  <script>
    $(function(){
      $.ajax({
        url:"/demo",
        type:"post",
        data:{username:"James",password:"123456"},
        success:function(data){
          console.log(data)
        }
      });
    })
  </script>
</head>
<body>
${message}
</body>
</html>
