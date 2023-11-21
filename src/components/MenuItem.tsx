import Link from 'next/link'

function MenuItem({title,pageRef}:{title:string, pageRef:string}) {
  return (
    <Link className="w-120 text-center mx-5 mt-auto mb-auto text-secondary" href={pageRef}>
    {title}
    </Link>
  )
}

export default MenuItem