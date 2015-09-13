package com.iezu.controller;

import com.iezu.domain.UserInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class HelloController {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		model.addAttribute("message", "Hello world!");
		return "helloworld";
	}
	@RequestMapping(value = "/demo",method = RequestMethod.POST)
	@ResponseBody
	public UserInfo Demo(@RequestParam String username,@RequestParam String password){
		UserInfo demo=new UserInfo();
		demo.setUsername(username);
		demo.setPassword(password);
		return demo;
	}


}