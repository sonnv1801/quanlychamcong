import Axios from "axios";

const API = "https://i-work.onrender.com/v1/timekp";

export class TimeKP {
  gettimeKP(accessToken) {
    return Axios.get(API, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
}
