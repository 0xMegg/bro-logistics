// import './Header.scss';

export default function Header() {
  return (
    <div>
      <div>
        <h1> <a href="../main/main.php"> 조일물류 로고 </a> </h1>
        <div>
          <ul>
            <li> <a href="../information/information.php"> 회사소개 </a> </li>
            <li> <a href="../organize/logistics_network.php"> 조직현황 </a> </li>
            <li> <a href="../possesion/vehicle.php"> 보유 </a> </li>
            <li> <a href="../business/domestic.php"> 사업현황 </a> </li>
            <li> <a href="../contact/notice.php?b_id=13"> 고객센터 </a> </li>
          </ul>
        </div>
      </div>
      <nav>
        <div>
          <ul>
            <li>
              <a href="../information/information.php"> 회사소개 </a>
              <div>
                <ul>
                  <li> <a href="../information/information.php"> 개요 </a> </li>
                  <li> <a href="../information/history.php"> 회사연혁 </a> </li>
                  <li> <a href="../information/perfomance.php"> 사업실적 </a> </li>
                  <li> <a href="../information/organization.php"> 조직구성 </a> </li>
                  <li> <a href="../information/direction.php"> 오시는길 </a> </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="../organize/logistics_network.php"> 조직현황 </a>
              <div>
                <ul>
                  <li> <a href="../organize/logistics_network.php"> 물류 네트워크 </a> </li>
                  <li> <a href="../organize/transportation_power.php"> 운송 경쟁력 </a> </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="../possesion/vehicle.php"> 보유 </a>
              <div>
                <ul>
                  <li> <a href="../possesion/vehicle.php"> 차량 보유현황 </a> </li>
                  <li> <a href="../possesion/logistics_center.php"> 물류센터 현황 </a> </li>
                  <li> <a href="../possesion/operating_system.php"> 운용 시스템 현황 </a> </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="../business/domestic.php"> 사업현황 </a>
              <div>
                <ul>
                  <li> <a href="../business/domestic.php"> 국내물류 </a> </li>
                  <li> <a href="../business/center_operation.php"> 물류센터 운영 </a> </li>
                  <li> <a href="../business/project.php"> 프로젝트 물류 </a> </li>
                  <li> <a href="../business/fullfilment.php"> 풀필먼트 </a> </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="../contact/notice.php?b_id=13"> 고객센터 </a>
              <div>
                <ul>
                  <li> <a href="../contact/notice.php?b_id=13"> 공지사항 </a> </li>
                  <li> <a href="../contact/contact.php"> 업무별 연락처 </a> </li>
                  <li> <a href="../contact/inquiry.php"> 고객의 소리 </a> </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
