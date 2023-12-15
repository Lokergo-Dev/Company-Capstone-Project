<div className="bg-white">
  <div>
    {/* Mobile filter dialog */}
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setMobileFiltersOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>

    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Rekomendasi pekerjaan untuk anda
        </h1>

        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm"
                          )}>
                          {option.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <button
            type="button"
            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
            <span className="sr-only">View grid</span>
            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}>
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <form className="hidden lg:block">
            {filters.map((section) => (
              <Disclosure
                as="div"
                key={section.id}
                className="border-b border-gray-200 py-6">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>

          {/* Jobs grid */}
          <div
            aria-label="card section"
            className="lg:col-span-3 flex flex-col gap-5">
            <div
              aria-label="user profile recomendation"
              className="border-[1px] bg-white rounded-md">
              <div className="flex justify-between">
                <div className="px-3 pt-5">
                  <h1 className="text-xl font-semibold px-1">
                    Rekomendasi Pekerjaan untuk Anda
                  </h1>
                  <p className="text-sm px-1 text-gray-500">
                    Berdasarkan profil Anda
                  </p>
                </div>
                <div className="self-center pr-4 pt-5">
                  <a href="/jobs" className="flex justify-center items-center">
                    <p className="text-md text-center font-semibold text-primary">
                      Lihat Semua
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="/Jobs"
                  className="flex flex-wrap gap-4 pt-5 pb-5 justify-center items-center">
                  {visibleData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-[280px] h-[270px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
                        <div className="flex flex-col justify-between">
                          <div className="flex justify-between gap-3">
                            <img
                              src={item.link_image}
                              alt="Company Logo"
                              className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
                            />
                            <div
                              className="flex flex-col self-start truncate"
                              aria-label="company-label">
                              <a href="">
                                <h1 className="text-lg font-bold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                                  {item.job_title}
                                </h1>
                              </a>
                              <div className=" flex text-sm gap-1 text-black">
                                <h2 className="flex items-center">
                                  <IoLocationOutline /> {item.location}
                                </h2>
                              </div>
                            </div>
                            <div className="w-50 h-50 p-1 self-start rounded border border-gray-200">
                              <LuBookmarkPlus />
                            </div>
                          </div>
                          <div className="pt-5">
                            <button className="rounded-md truncate bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                              {item.work_type}
                            </button>
                          </div>
                          <div className="flex flex-row justify-start items-center truncate pt-5">
                            <div className="mr-1">
                              <FaRegBuilding />
                            </div>
                            <h3 className="text-xs text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                              {item.company}
                            </h3>
                          </div>
                          <p className="text-[13px] text-[#959595] truncate pt-5">
                            Skills: {item.skills}
                          </p>
                          <div className="flex gap-x-2 pt-5 justify-between">
                            <div className="flex truncate">
                              <h1 className="text-md font-bold self-end truncate text-primary">
                                {item.salary}
                              </h1>
                              <h2 className="text-xs text-gray-400 self-end">
                                /Month
                              </h2>
                            </div>
                            <button className="border rounded block p-1 w-[40%] text-[12px] font-medium text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                              <a href="/jobs">Apply Now</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </a>
              </div>
            </div>
            <div
              aria-label="location recomendation"
              className="border-[1px] bg-white rounded-md">
              <div className="flex justify-between">
                <div className="px-3 pt-5">
                  <h1 className="text-xl font-semibold px-1">
                    Pekerjaan di Sekitar Anda
                  </h1>
                  <p className="text-sm px-1 text-gray-500">
                    Berdasarkan lokasi Anda
                  </p>
                </div>
                <div className="self-center pr-4 pt-5">
                  <a href="/jobs" className="flex justify-center items-center">
                    <p className="text-md text-center font-semibold text-primary">
                      Lihat Semua
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-4 pt-5 pb-5 justify-center items-center">
                  {visibleData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-[280px] h-[270px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
                        <div className="flex flex-col justify-between">
                          <div className="flex justify-between gap-3">
                            <img
                              src={item.link_image}
                              alt="Company Logo"
                              className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
                            />
                            <div
                              className="flex flex-col self-start truncate"
                              aria-label="company-label">
                              <a href="">
                                <h1 className="text-lg font-bold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                                  {item.job_title}
                                </h1>
                              </a>
                              <div className=" flex text-sm gap-1 text-black">
                                <h2 className="flex items-center">
                                  <IoLocationOutline /> {item.location}
                                </h2>
                              </div>
                            </div>
                            <div className="w-50 h-50 p-1 self-start rounded border border-gray-200">
                              <LuBookmarkPlus />
                            </div>
                          </div>
                          <div className="pt-5">
                            <button className="rounded-md truncate bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                              {item.work_type}
                            </button>
                          </div>
                          <div className="flex flex-row justify-start items-center truncate pt-5">
                            <div className="mr-1">
                              <FaRegBuilding />
                            </div>
                            <h3 className="text-xs text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                              {item.company}
                            </h3>
                          </div>
                          <p className="text-[13px] text-[#959595] truncate pt-5">
                            Skills: {item.skills}
                          </p>
                          <div className="flex gap-x-2 pt-5 justify-between">
                            <div className="flex truncate">
                              <h1 className="text-md font-bold self-end truncate text-primary">
                                {item.salary}
                              </h1>
                              <h2 className="text-xs text-gray-400 self-end">
                                /Month
                              </h2>
                            </div>
                            <button className="border rounded block p-1 w-[40%] text-[12px] font-medium text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                              <a href="/jobs">Apply Now</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              aria-label="location recomendation"
              className="border-[1px] bg-white rounded-md">
              <div className="flex justify-between">
                <div className="px-3 pt-5">
                  <h1 className="text-xl font-semibold px-1">
                    Rekomendasi Pekerjaan Lainnya
                  </h1>
                  <p className="text-sm px-1 text-gray-500">
                    Berdasarkan profil dan riwayat pencarian Anda
                  </p>
                </div>
                <div className="self-center pr-4 pt-5">
                  <a href="/jobs" className="flex justify-center items-center">
                    <p className="text-md text-center font-semibold text-primary">
                      Lihat Semua
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-4 pt-5 pb-5 justify-center items-center">
                  {visibleData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="w-[280px] h-[270px] p-[20px] border-[1px] bg-gray-50 rounded-md hover:bg-white hover:shadow-lg hover:border-primary transition ease-in-out delay-100 hover:-translate-y-1 duration-300">
                        <div className="flex flex-col justify-between">
                          <div className="flex justify-between gap-3">
                            <img
                              src={item.link_image}
                              alt="Company Logo"
                              className="w-[50px] h-[50px] self-start p-1 rounded border border-gray-200"
                            />
                            <div
                              className="flex flex-col self-start truncate"
                              aria-label="company-label">
                              <a href="">
                                <h1 className="text-lg font-bold text-color truncate hover:text-primary transition ease-in-out delay-100 duration-300">
                                  {item.job_title}
                                </h1>
                              </a>
                              <div className=" flex text-sm gap-1 text-black">
                                <h2 className="flex items-center">
                                  <IoLocationOutline /> {item.location}
                                </h2>
                              </div>
                            </div>
                            <div className="w-50 h-50 p-1 self-start rounded border border-gray-200">
                              <LuBookmarkPlus />
                            </div>
                          </div>
                          <div className="pt-5">
                            <button className="rounded-md truncate bg-gray-200 p-1.5 text-sm font-medium text-gray-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-primary transition ease-in-out delay-100 duration-300">
                              {item.work_type}
                            </button>
                          </div>
                          <div className="flex flex-row justify-start items-center truncate pt-5">
                            <div className="mr-1">
                              <FaRegBuilding />
                            </div>
                            <h3 className="text-xs text-ellipsis font-semibold block hover:text-primary transition ease-in-out delay-100 duration-300">
                              {item.company}
                            </h3>
                          </div>
                          <p className="text-[13px] text-[#959595] truncate pt-5">
                            Skills: {item.skills}
                          </p>
                          <div className="flex gap-x-2 pt-5 justify-between">
                            <div className="flex truncate">
                              <h1 className="text-md font-bold self-end truncate text-primary">
                                {item.salary}
                              </h1>
                              <h2 className="text-xs text-gray-400 self-end">
                                /Month
                              </h2>
                            </div>
                            <button className="border rounded block p-1 w-[40%] text-[12px] font-medium text-primary border-primary hover:bg-primary hover:border-primary hover:text-white transition ease-in-out delay-100 duration-300">
                              <a href="/jobs">Apply Now</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>;
