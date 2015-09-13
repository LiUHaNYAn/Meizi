<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${title}</title>
</head>
<body>
<form id="userinfo" action="/user/adduser" method="post">
  <label for="username">用户名</label>
  <input type="text" name="password" id="password">
  <label for="username">密码</label>
  <input type="password" name="username" id="username">
  <button type="submit">提交</button>
</form>
</body>
</html>
