import { getRoomById } from "@/actions/booking";
import RoomDetailsClient from "./RoomDetailsClient";




const RoomDetailsPage = async(props: {
  params:Promise< {id:string,locale: string} >
}) => {
  const {id} = await props.params;
  const roomId = Number(id);
  const room = await getRoomById(roomId);
  if (!room) return <div>ოთახი ვერ მოიძებნა</div>;
  return <RoomDetailsClient room={room} roomId={roomId} />;
};

export default RoomDetailsPage;
