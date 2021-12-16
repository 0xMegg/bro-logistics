// import './Block09.scss';

export default function Block09() {
	return (
		<div >

			<div>
				<div id="map"></div>

				{/* <script>
					var mapContainer = document.getElementById('map'), // 지도를 표시할 div
					mapOption = {
						center: new kakao.maps.LatLng(37.109334650590824, 127.04577310974352), // 지도의 중심좌표
					// draggable: false, // 지도를 생성할때 지도 이동 및 확대/축소를 막으려면 draggable: false 옵션을 추가하세요
					level: 3 // 지도의 확대 레벨
			};

					var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

					// 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
					map.setZoomable(false);

					// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
					var zoomControl = new kakao.maps.ZoomControl();
					map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


					// 마커가 표시될 위치입니다 
					var markerPosition  = new kakao.maps.LatLng(37.109334650590824, 127.04577310974352);

					// 마커를 생성합니다
					var marker = new kakao.maps.Marker({
						position: markerPosition
		});

					// 마커가 지도 위에 표시되도록 설정합니다
					marker.setMap(map);
				</script> */}
			</div>

			<div>

				<div>
					<p> (주)조일물류 </p>
					<p> 1588-2886 </p>
					<p>
						주소 : 경기도 평택시 서탄면 사리길 53 <br />
						월 - 금 09:00 AM - 06:00 PM / <br />
						점심시간 12:00 PM - 01:00 PM / 토·일·공휴일 휴무
					</p>
				</div>

			</div>
		</div>
	);
}