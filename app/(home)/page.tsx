import Link from 'next/link';
import Image from 'next/image';
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">



      <Link
          href="/docs"
          className="mx-auto mb-12 relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
        ><Image src="arch_logo.png" alt='Логотип Arch Linux' className="max-w-xs transition duration-300 ease-in-out hover:rotate-90" width={156} height={156}></Image></Link>
      <h1 className="mb-4 text-2xl font-bold">Гайд Arch Linux</h1>
      <p className="text-fd-muted-foreground">
        Привет друг, это гайд по моему любимому дистрибутиву. Открывай {' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        для просмотра.
      </p><div className="mx-auto mt-3">
      <Link href="https://t.me/deathault" target='_blank'><Image src="deathault.jpg" alt='deathault telegram' width={55} height={55} className='mx-auto mt-12 rounded-full ring-2 ring-gray-700 hover:ring-white'></Image></Link>
    </div>
    </main>
  );
}
