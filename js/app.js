new fullpage("#full-page", {
    // 라이센스 키
    licensekey: "",
    // 배경 색
    // sectionsColor: ["#gray", "#00ff00", "#0000ff", "#aaaaaa"],
    // 섹션 스크롤 넣기
    navigation: true,
    // 해당 섹션의 제목
    navigationTooltips: ["HOME", "온도", "미세먼지", "급식"],
    // 스크롤 시간 조정
    scrollingSpeed: 2000,
    // 스크롤이 시작할 때 실행
    onLeave: function (origin, destination, direction) {
        // console.log("onLeave", origin.index, destination.index);
        if (origin.index == 1) {
            // section s1에 있는 h3를 숨김
            $(".s1 h3").hide();
        }
    },
    // 스크롤이 끝날 때 실행
    afterLoad: function (origin, destination, direction) {
        // console.log("afterLoad");
        if (destination.index == 1) {
            // section s1에 있는 h3를 보여줌
            $(".s1 h3").show();
        }
    },
});