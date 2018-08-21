package com.gms.web.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService{

	@Override
	public void add(MemberDTO p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberDTO retrieve(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modify(Map<?, ?> p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void remove(Map<?, ?> p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean login(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return false;
	}
	//@Service 로 이미 싱글톤 걸려있고, template 패턴인 상태

}
