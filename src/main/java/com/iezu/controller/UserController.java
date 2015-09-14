package com.iezu.controller;

import com.iezu.common.ResultModel;
import com.iezu.domain.UserInfo;
import com.sun.deploy.net.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by 20150831 on 2015/9/13.
 */
@Controller
public class UserController {
    @Autowired
    private DataSource dataSource;
    @RequestMapping("/user/index")
    public ModelAndView index(){
        ModelAndView view=new ModelAndView("user/index");
        view.addObject("title","这是用户注册的页面");
        return view;
    }
    @RequestMapping(value = "/user/adduser")
    @ResponseBody
    public ResultModel UserAdd(@RequestParam String username,@RequestParam String password,HttpSession session) throws SQLException {
        Connection connection=dataSource.getConnection();
        PreparedStatement statement= connection.prepareStatement("");
        statement.execute();
        UserInfo demo=new UserInfo();
        demo.setUsername(username);
        demo.setPassword(password);
        ResultModel resultModel=new ResultModel();
        resultModel.setResultcode(1);
        resultModel.setMsg("你好吗");
        resultModel.setData(demo);
        session.setAttribute("username",username);
        return  resultModel;
    }

}
