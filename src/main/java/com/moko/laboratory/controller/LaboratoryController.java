package com.moko.laboratory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LaboratoryController {

	@RequestMapping("/laboratory")
	public String laboratory() {
		return "laboratory";
	}
}
