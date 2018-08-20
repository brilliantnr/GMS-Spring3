package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component  //<-스프링에서 bean으로 만든다
@Data	//getter,setter로 쓴다
public class Image {
	private String imgseq;
	private String imgname;
	private String extension;
	private String userid;  //프로필 이미지
}
