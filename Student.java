package com.test.Ex01;


public class Student {
	private String name;
	private int guk;
	private int math;
	private int en;
	
	public Student() {};

	public Student(String name, int guk, int math, int en) {
		this.name = name;
		this.guk = guk;
		this.math = math;
		this.en = en;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getGuk() {
		return guk;
	}

	public void setGuk(int guk) {
		this.guk = guk;
	}

	public int getMath() {
		return math;
	}

	public void setMath(int math) {
		this.math = math;
	}

	public int getEn() {
		return en;
	}

	public void setEn(int en) {
		this.en = en;
	};
	
	
}
