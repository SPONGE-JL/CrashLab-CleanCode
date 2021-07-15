const join = (str, str2) => {
  dbRepository.add({ str, str2 });
};

join("dev-chloe", "#2102103#"); // 이 코드가 회원가입 로직이라는 것을 눈치챌 수 있는가?
