import CameraPage from './page/camera'
import HomePage from './page/home'
import CameraResultPage from './page/camera_result'
import ScoreResultPage from './page/score_result'


export const routeInfo = {
    home: {
      title: "홈",
      isExact: true,
      route: "/home",
      pageComp: HomePage,
      frameVisible: true,
    },
    camera: {
        title: "카메라 화면",
        isExact: true,
        route: "/camera",
        pageComp: CameraPage,
        frameVisible: true,
    },
    cameraResult: {
        title: "카메라 결과 화면",
        isExact: true,
        route: "/camera_result",
        pageComp: CameraResultPage,
        frameVisible: true,
    },
    scoreResult: {
      title: "점수 결과 화면",
      isExact: true,
      route: "/score_result",
      pageComp: ScoreResultPage,
      frameVisible: true,
  },
};

//Auto generated map
export var routeInfoMap = new Map();
for (var id in routeInfo) {
  let { route, ...info } = routeInfo[id];
  // console.log(route);
  routeInfoMap.set(route || "0", { ...info });
}
