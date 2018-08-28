package com.gms.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.controller.HomeController;
import com.gms.web.controller.MemberController;
import com.gms.web.domain.MemberDTO;
import com.gms.web.repository.MemberDAO;
import com.gms.web.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService{
	static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberDAO memberDAO;

	@Override
	public void add(MemberDTO p) {
		logger.info("---add() :p: {}---", p);
		memberDAO.insert(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		logger.info("---list() :p: {}---", p);
		return memberDAO.selectList(p);
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		logger.info("---search() :p: {}---", p);
		return memberDAO.selectSome(p);
	}

	@Override
	public MemberDTO retrieve(MemberDTO p) {
		logger.info("---retrieve() :p: {}---", p);
		return memberDAO.selectOne(p);
	}

	@Override
	public int count(Map<?, ?> p) {
		logger.info("---count() :p: {}---", p);
		return memberDAO.count(p);
	}

	@Override
	public void modify(MemberDTO p) {
		logger.info("---modify() :p: {}---", p);
		memberDAO.update(p);
	}

	@Override
	public void remove(MemberDTO p) {
		logger.info("---remove() :p: {}---", p);
		memberDAO.delete(p);
	}

	@Override
	public boolean login(MemberDTO p) {
		logger.info("---login() :p: {}---", p);
		boolean flag =false;
		if(memberDAO.login(p)!=null) {
			flag=true;
		}
		return flag;
	}
	//@Service 로 이미 싱글톤 걸려있고, template 패턴인 상태

}
