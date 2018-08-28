package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gms.web.domain.MemberDTO;
import com.gms.web.repository.MemberDAO;

@Repository
public class MemberMapper implements MemberDAO{
	static final Logger logger = LoggerFactory.getLogger(MemberMapper.class);
	
	@Autowired SqlSessionFactory factory;
	private static final String ns = "com.gms.web.mapper.MemberMapper";
	//.xml의 mapper를 ns로 줌
	
	@Override
	public void insert(MemberDTO p) {
		logger.info("---insert() :: {}---","ENTER");
		SqlSession sqlSession = factory.openSession();
		sqlSession.insert(ns+".insert",p);
	}

	@Override
	public List<?> selectList(Map<?, ?> p) {
		logger.info("---selectList() :: {}---","ENTER");
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> selectSome(Map<?, ?> p) {
		logger.info("---selectSome() :: {}---","ENTER");
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberDTO selectOne(MemberDTO p) {
		logger.info("---selectOne() :: {}---","ENTER");
		SqlSession sqlSession = factory.openSession();
		MemberDTO m = (MemberDTO) sqlSession.selectOne(ns+".selectOne",p);
		return m;
	}

	@Override
	public int count(Map<?, ?> p) {
		logger.info("---count() :: {}---","ENTER");
		SqlSession sqlSession = factory.openSession();
		//
		return 0;
	}

	@Override
	public void update(MemberDTO p) {
		logger.info("---update() :: {}---","ENTER");
		SqlSession sqlSession = factory.openSession();
		sqlSession.update(ns+".update",p);
	}

	@Override
	public void delete(MemberDTO p) {
		logger.info("---delete() :: {}---","ENTER");
		SqlSession sqlSession = factory.openSession();
		sqlSession.delete(ns+".delete",p);
		
	}

	@Override
	public MemberDTO login(MemberDTO p) {
		logger.info("---login() :: {}---","ENTER");
		SqlSession sqlSession = factory.openSession();
		MemberDTO m = sqlSession.selectOne(ns+".login",p);
		return m;
	}

}
