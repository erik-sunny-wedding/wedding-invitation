import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />

        <br></br>
        {/* 대중교통 섹션 */}
        <div className="transport-section">
          <span className="content">
          🚇 용산역 (<span className="line1">1호선</span>, <span className="lineKH">경의중앙선</span>)
          <br />→ <b>용산역</b> 하차 후 <b>3번출구</b>
          <br /> 도보 10분 <b>호텔(그랜드머큐어)</b> 도착
          <br /><br></br>
          🚌 (간선) 505번, (지선) 5012
          <br />→ <b>용산 전자상가</b> 하차 후 도보 3분거리
          <br /><br></br>
          🚌 (간선) 400번, (지선) 5012, 0017, (마을버스) 용산03
          <br />→ <b>신용산 지하차도</b> 하차 후 도보 10분거리
          </span>
        </div>

        <br></br>
        {/* 자가용 섹션 */}
        <div className="transport-section">
          <span className="content">
            🚘 주차안내: <b>그랜드머큐어 호텔구역</b>에 주차 후 엘리베이터로 2층 이동
          </span>
        </div>

      </LazyDiv>

      {/* <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            - 1호선/경의중앙선 <b>용산역</b>, 4호선 <b>신용산역</b> 하차
            <br />
            → 용산역 3번 출구 방면 아이파크몰 연결다리
            <br />
            → 도보 10 - 15분
            <br /><br></br>

            - 6호선 <b>효창공원앞역</b> 하차
            <br />
            → 3번 출구로 나와서 
            <br />
            → <b>용산전자상가</b> 방면으로 이동
            → 도보 10 - 15분

          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - <b>용산 전자상가-전자랜드 정류장</b> 하차 (도보 약 3~5분)
            <br />
            - <b>신용산역(중) 정류장</b> 하차 (도보 약 10~15분)
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>그랜드 머큐어 엠베서더 호텔 서울 용산</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />

        </div>
      </LazyDiv> */}
    </>
  )
}
