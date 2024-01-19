import { NextPageContext } from "next"
import { ErrorProps } from "next/error"

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="flex flex-grow flex-row items-center justify-center gap-4 text-starick-brown">
      <h1 className="text-3xl font-bold">Error{statusCode ? ` ${statusCode}` : ""}:</h1>
      <p>{statusCode==404 ? 
        "Page could not be found" 
        : statusCode ? 
        "Server encountered an error" 
        : "Client encountered an error"}</p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error