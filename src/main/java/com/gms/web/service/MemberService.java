package com.gms.web.service;

import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

public interface MemberService {
	//인터페이스는 객체 아니니까 @ 이거 안함
	// 싱글톤 원래 안걸었음
	
	public void add(MemberDTO p);
	public List<?> list(Map<?, ?> p);
	public List<?> search(Map<?, ?> p);
	public MemberDTO retrieve(Map<?, ?> p);
	public int count(Map<?, ?> p);
	public void modify(Map<?, ?> p);
	public void remove(Map<?, ?> p);
	public boolean login(Map<?, ?> p);
	
}
