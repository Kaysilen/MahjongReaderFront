import CameraPage from './page/camera'
import HomePage from './page/home'
import ResultPage from './page/result'


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
    result: {
        title: "결과 화면",
        isExact: true,
        route: "/result",
        pageComp: ResultPage,
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
