import { useState } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    router.push({ pathname, query }, asPath, { locale: lng });
    setOpen(false);
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-700 text-white p-2 rounded"
      >
        {locale.toUpperCase()}
      </button>

      {open && (
        <div className="bg-white shadow-lg rounded mt-2 p-2 flex flex-col">
          {locales.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              disabled={lng === locale}
              className={`p-1 text-sm ${lng === locale ? "font-bold" : ""}`}
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
