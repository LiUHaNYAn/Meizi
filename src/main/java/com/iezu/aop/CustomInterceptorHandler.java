package com.iezu.aop;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import sun.rmi.runtime.Log;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by 20150831 on 2015/9/13.
 */
public class CustomInterceptorHandler implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object o, ModelAndView modelAndView) throws Exception {
       System.out.println("Path Info:"+request.getRequestURI());
        System.out.println("Path Info:"+request.getQueryString());
        HttpSession session=request.getSession();
        if(!request.getRequestURI().equals("/user/index")){
            if(session==null||session.getAttribute("username")==null){
                response.sendRedirect("/user/index");
            }
        }

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
