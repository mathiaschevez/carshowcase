'use client';
import { Fragment, useMemo, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { manufacturers } from '@/constants';

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (_: string) => void
}

export function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
  const [query, setQuery] = useState('')

  const filteredManufacturers = useMemo(() => {
    return query === '' ? 
      manufacturers : 
        manufacturers.filter(m =>
          m.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  }, [query]);

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image src='/car-logo.svg' width={20} height={20} className='ml-4' alt='Car Logo' />
          </Combobox.Button>
          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={e => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            // afterLeave={() => setManufacturer('')}
          >
            <Combobox.Options>
              {(filteredManufacturers.length === 0 && query !== '') ? <>
                <Combobox.Option value={query} className='search-manufacturer__option'>
                  Create {query}
                </Combobox.Option> 
              </> : <>
                {filteredManufacturers.map(m => (
                  <Combobox.Option
                    key={m}
                    value={m}
                    className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  >{m}</Combobox.Option>
                ))}
              </>}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

// {({ selected, active }) => (
//   <>
//     <span
//       className={`block truncate ${
//         selected ? 'font-medium' : 'font-normal'
//       }`}
//     >
//       {m}
//     </span>
//     {selected ? (
//       <span
//         className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//           active ? 'text-white' : 'text-teal-600'
//         }`}
//       ></span>
//     ) : null}
//   </>
// )}