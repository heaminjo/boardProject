package com.test.Ex01;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class MainStudent {

	public static void main(String[] args) {
		AbstractApplicationContext ctx = new GenericXmlApplicationContext("classpath:student.xml");
		StudentAVG studentavg = ctx.getBean("studentavg",StudentAVG.class);
		
		studentavg.printAVG();
		
		Student student2 = ctx.getBean("student2",Student.class);
		Student student3 = ctx.getBean("student3",Student.class);
		
		studentavg.setStudent(student2);
		studentavg.printAVG();
		
		studentavg.setStudent(student3);
		studentavg.printAVG();
	}

}
