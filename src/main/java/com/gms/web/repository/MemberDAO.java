package com.gms.web.repository;

import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

public interface MemberDAO {
	public void insert(MemberDTO p);
	public List<?> selectList(Map<?, ?> p);
	public List<?> selectSome(Map<?, ?> p);
	public MemberDTO selectOne(MemberDTO p);
	public int count(Map<?, ?> p);
	public void update(MemberDTO p);
	public void delete(MemberDTO p);
	public MemberDTO login(MemberDTO p);
}
