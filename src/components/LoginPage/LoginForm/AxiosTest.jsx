// import axios from "axios"; // 기본 axios
// import axios from "@/lib/axios"; // 전역 config(baseURL, content-type)설정된 axios
import { cookieAPI, localStorageAPI } from "@/lib/axios";

export default function AxiosTest() {
  const axiosReq = async () => {
    try {
      const postResponse = await localStorageAPI.post('/posts', {
        firstName : 'Fred', 
        lastName : 'Flint'
      })
      console.log(postResponse.data);
    } catch (err) {
      console.error(err)
    } 
  }

  return (
    <>
      <button onClick={axiosReq}>json요청보내기</button>
    </>
  )
}