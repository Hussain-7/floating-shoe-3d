import ShoesContainer from "./components/ShoesContainer"

export default function App() {
  return (
    <div
      style={{
        // flex and everything on center of page
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <ShoesContainer />
    </div>
  )
}
