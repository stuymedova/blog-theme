export default function Alert({ preview }) {
  if(preview) { 
    return (
      <div>
        This page is a preview.{' '}
        <a href="/api/exit-preview">Click here</a>{' '}
        to exit preview mode.
      </div>
    )
  } return <></>;  
}