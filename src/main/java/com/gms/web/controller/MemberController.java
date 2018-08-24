package com.gms.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/member")
public class MemberController {
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/add")
	public String add() {
		logger.info("---add() :: {}---","ENTER");
		return "redirect:/";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {}
	@RequestMapping("/retrieve")
	public void retrieve() {}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping("/modify")
	public void modify() {}
	@RequestMapping("/remove")
	public void remove() {}
	@RequestMapping("/login")
	public String login() {
		logger.info("---login() :: {}---","ENTER");
		return "login_success";
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("---logout() :: {}---","ENTER");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
	
}
