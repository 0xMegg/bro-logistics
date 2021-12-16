export default function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div>
          <div>
            <ul>
              <li> <a href="../information/information.php"> 회사소개 </a> </li>
              <li> <a href="../policy/privacy.php"> 개인정보취급방침 </a> </li>
              <li> <a href="../policy/terms_use.php"> 이용약관 </a> </li>
            </ul>
          </div>
          <div>
            <div>
              <address>
                <span> 상호 : (주)조일물류 </span>
                <span> 대표 : 차재옥 </span>  <br />
                <span> 전화번호 : 1588-2886 </span>
                <span> 팩스번호 : 031-664-1388 </span>  <br />
                <span> 주소 : 경기도 평택시 서탄면 사리길 53 </span>
                <span> 사업자등록번호 : 124-86-11490 </span>
              </address>
            </div>

            <div>
              <img src="/images/common/logo_gray.png" alt="조일물류 로고" className="ft_logo" />
              <p>Copyright (C) JOIL. all rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
