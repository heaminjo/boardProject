package com.test.Ex01;

public class StudentAVG {
	private Student student;
	
	public StudentAVG() {}

	public StudentAVG(Student student) {
		super();
		this.student = student;
	}

	public void setStudent(Student student) {
		this.student = student;
	};
	
	public void printAVG() {
		int sum = student.getGuk()+
				  student.getMath()+
				  student.getEn();
		int avg = sum / 3;
		
		System.out.println("ÀÌ¸§: "+student.getName());
		System.out.println("Æò±Õ: "+avg);
		System.out.println("===============");
	}
}
