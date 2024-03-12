import React from "react";

const Windows = () => {
  return (
    <div className="min-h-screen flex w-full min-w-full items-center justify-center bg-gray-100">
      <div className="overflow-hidden">
        <div className="">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-5xl text-center mx-auto">
              <img
                src="/logos/windows.png"
                alt=""
                className="w-auto h-56 mx-auto"
              />
              {/* Title */}

              <h1 className="block font-semibold text-gray-800 text-3xl md:text-4xl lg:text-5xl text-center">
                Windows Page
              </h1>

              {/* End Title */}
              <div className="mt-5 max-w-7xl">
                <p className="text-lg text-gray-600 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis, aut est explicabo ratione eveniet commodi alias
                  nulla error saepe nam itaque quibusdam fugiat amet, nihil
                  dolore possimus cumque distinctio sequi praesentium culpa
                  excepturi exercitationem totam. Ut vero pariatur fugit tempora
                  magni repudiandae consequuntur? Expedita, assumenda.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 place-items-center">
            <div>
              <img src="/logos/android.png" alt="" width={128} height={128} />
            </div>
            <div>
              <img src="/logos/linux.png" alt="" width={72} height={72} />
            </div>
            <div>
              <img src="/logos/ios.png" alt="" width={72} height={72} />
            </div>
            <div>
              <img src="/logos/mac.png" alt="" width={72} height={72} />
            </div>
            <div>
              <img src="/logos/windows.png" alt="" width={72} height={72} />
            </div>
            <div>
              <img
                src="/logos/windows-phone.png"
                alt=""
                width={72}
                height={72}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </div>
  );
};

export default Windows;
