import type {Feature,FeatureProps} from '../../featureContract'
import type {Doctor} from '../../types'
import {useDispatch,useSelector} from 'react-redux'
import {cancelAppointment} from '../../store'
import type {RootState} from '../../store'
import doctorsSeed from '../../data/doctors.json'
import BookingModal from '../../components/BookingModal'
const doctors=doctorsSeed as Doctor[]
function Booking({onBook}:FeatureProps){return <section><h2 className="heading mb-4">ვიზიტის დაჯავშნა</h2><p className="subheading mb-5">აირჩიეთ ექიმი და დაჯავშნეთ ვიზიტი.</p><div className="grid sm:grid-cols-2 gap-4">{doctors.map(d=><div key={d.id} className="surface p-5"><h3 className="font-bold">{d.name}</h3><p className="text-muted mb-3">{d.specialty}</p><button className="button-primary" onClick={()=>onBook(d)}>დაჯავშნა</button></div>)}</div></section>}
function Appointments(){const appointments=useSelector((s:RootState)=>s.medical.appointments);const dispatch=useDispatch();return <section><h2 className="heading mb-4">ჩემი ვიზიტები</h2>{appointments.length?appointments.map(a=><div key={a.id} className="surface p-4 mb-3"><strong>{a.doctorName}</strong><p>{a.date} · {a.time}</p><p>{a.status}</p>{a.status!=='გაუქმებული'&&<button className="button-secondary mt-3" onClick={()=>dispatch(cancelAppointment(a.id))}>ჯავშნის გაუქმება</button>}</div>):<p className="muted-box">ჯერ ვიზიტი არ დაგიჯავშნიათ.</p>}</section>}
function Overlay({selectedDoctor,closeBooking}:FeatureProps){return <BookingModal doctor={selectedDoctor} onClose={closeBooking}/>}
const feature:Feature={order:2,bookingAvailable:true,routes:[{path:'/booking',label:'ვიზიტის დაჯავშნა',Page:Booking},{path:'/appointments',label:'ჩემი ვიზიტები',Page:Appointments}],Overlay}
export default feature
