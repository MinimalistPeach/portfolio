import React from 'react';
import { useTranslation } from 'react-i18next';

function Intro() {

   const {t} = useTranslation(["intro_translation"]);

   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">MinimalistPeach</h1>
         <p className="text-base md:text-xl mb-3 font-medium">{t("intro_translation:intro:speciality")}</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            {t("intro_translation:intro:short-intro")}
         </p>
      </div>
   )
}

export default Intro;