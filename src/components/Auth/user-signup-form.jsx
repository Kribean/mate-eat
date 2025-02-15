import React, { useState } from 'react';
import { X } from 'lucide-react';

const departments = [
  "01 - Ain",
  "02 - Aisne",
  "03 - Allier",
  "04 - Alpes-de-Haute-Provence",
  "05 - Hautes-Alpes",
  "06 - Alpes-Maritimes",
  "07 - Ardèche",
  "08 - Ardennes",
  "09 - Ariège",
  "10 - Aube",
  "11 - Aude",
  "12 - Aveyron",
  "13 - Bouches-du-Rhône",
  "14 - Calvados",
  "15 - Cantal",
  "16 - Charente",
  "17 - Charente-Maritime",
  "18 - Cher",
  "19 - Corrèze",
  "2A - Corse-du-Sud",
  "2B - Haute-Corse",
  "21 - Côte-d'Or",
  "22 - Côtes-d'Armor",
  "23 - Creuse",
  "24 - Dordogne",
  "25 - Doubs",
  "26 - Drôme",
  "27 - Eure",
  "28 - Eure-et-Loir",
  "29 - Finistère",
  "30 - Gard",
  "31 - Haute-Garonne",
  "32 - Gers",
  "33 - Gironde",
  "34 - Hérault",
  "35 - Ille-et-Vilaine",
  "36 - Indre",
  "37 - Indre-et-Loire",
  "38 - Isère",
  "39 - Jura",
  "40 - Landes",
  "41 - Loir-et-Cher",
  "42 - Loire",
  "43 - Haute-Loire",
  "44 - Loire-Atlantique",
  "45 - Loiret",
  "46 - Lot",
  "47 - Lot-et-Garonne",
  "48 - Lozère",
  "49 - Maine-et-Loire",
  "50 - Manche",
  "51 - Marne",
  "52 - Haute-Marne",
  "53 - Mayenne",
  "54 - Meurthe-et-Moselle",
  "55 - Meuse",
  "56 - Morbihan",
  "57 - Moselle",
  "58 - Nièvre",
  "59 - Nord",
  "60 - Oise",
  "61 - Orne",
  "62 - Pas-de-Calais",
  "63 - Puy-de-Dôme",
  "64 - Pyrénées-Atlantiques",
  "65 - Hautes-Pyrénées",
  "66 - Pyrénées-Orientales",
  "67 - Bas-Rhin",
  "68 - Haut-Rhin",
  "69 - Rhône",
  "70 - Haute-Saône",
  "71 - Saône-et-Loire",
  "72 - Sarthe",
  "73 - Savoie",
  "74 - Haute-Savoie",
  "75 - Paris",
  "76 - Seine-Maritime",
  "77 - Seine-et-Marne",
  "78 - Yvelines",
  "79 - Deux-Sèvres",
  "80 - Somme",
  "81 - Tarn",
  "82 - Tarn-et-Garonne",
  "83 - Var",
  "84 - Vaucluse",
  "85 - Vendée",
  "86 - Vienne",
  "87 - Haute-Vienne",
  "88 - Vosges",
  "89 - Yonne",
  "90 - Territoire de Belfort",
  "91 - Essonne",
  "92 - Hauts-de-Seine",
  "93 - Seine-Saint-Denis",
  "94 - Val-de-Marne",
  "95 - Val-d'Oise",
  "971 - Guadeloupe",
  "972 - Martinique",
  "973 - Guyane",
  "974 - La Réunion",
  "976 - Mayotte"
];

const sectors = [
  { code: "A", name: "Agriculture, pêche, chasse et espaces naturels" },
  { code: "B", name: "Arts et arts du spectacle" },
  { code: "C", name: "Banque, assurance, immobilier" },
  { code: "D", name: "Commerce, vente et grande distribution" },
  { code: "E", name: "Communication, médias et multimédia" },
  { code: "F", name: "Construction, bâtiment et travaux publics" },
  { code: "G", name: "Hôtellerie-restauration, tourisme, loisirs et animation" },
  { code: "H", name: "Industrie" },
  { code: "I", name: "Informatique et télécommunications" },
  { code: "J", name: "Juridique" },
  { code: "K", name: "Management et gestion des entreprises" },
  { code: "L", name: "Santé" },
  { code: "M", name: "Sciences humaines et sociales" },
  { code: "N", name: "Secrétariat et assistanat" },
  { code: "P", name: "Services à la personne et à la collectivité" },
  { code: "Q", name: "Transport et logistique" }
];

const professions = [
  "étudiant",
  "étudiant en recherche de stage",
  "ingénieur",
  "commercial",
  "en recherche d'emploi",
  "entrepreneur",
  "ouvrier",
  "technicien",
  "cadre",
  "rh",
  "manager",
  "autre"
];

const InputField = ({ label, type, value, onChange, required, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const SelectField = ({ label, options, value, onChange, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Sélectionner...</option>
      {options.map((option, index) => (
        <option key={index} value={typeof option === 'string' ? option : option.code}>
          {typeof option === 'string' ? option : `${option.code} - ${option.name}`}
        </option>
      ))}
    </select>
  </div>
);

const UserAuthForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    department: '',
    linkedinUrl: '',
    sectors: [],
    profession: '',
    gender: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(isLogin ? { email: formData.email } : formData);
  };

  const handleSectorChange = (code) => {
    setFormData(prev => ({
      ...prev,
      sectors: prev.sectors.includes(code)
        ? prev.sectors.filter(s => s !== code)
        : [...prev.sectors, code]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Bienvenue!</h2>
          <div className="mt-4 inline-flex rounded-lg p-1 bg-gray-100">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isLogin ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`} 
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isLogin ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`} 
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <InputField
              label="Prénom"
              type="text"
              value={formData.firstName}
              onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              required
            />
          )}

          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            placeholder="Entrez votre email"
          />

          {!isLogin && (
            <>
              <SelectField
                label="Département"
                options={departments}
                value={formData.department}
                onChange={e => setFormData(prev => ({ ...prev, department: e.target.value }))}
                required
              />

              <InputField
                label="Lien LinkedIn"
                type="url"
                value={formData.linkedinUrl}
                onChange={e => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
              />

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secteurs d'activité <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                  {sectors.map((sector) => (
                    <label key={sector.code} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.sectors.includes(sector.code)}
                        onChange={() => handleSectorChange(sector.code)}
                        className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm">{sector.code} - {sector.name}</span>
                    </label>
                  ))}
                </div>
                {formData.sectors.length === 0 && (
                  <p className="text-sm text-red-500 mt-1">Veuillez sélectionner au moins un secteur</p>
                )}
              </div>

              <SelectField
                label="Profession"
                options={professions}
                value={formData.profession}
                onChange={e => setFormData(prev => ({ ...prev, profession: e.target.value }))}
              />

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Genre <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="homme"
                      checked={formData.gender === 'homme'}
                      onChange={e => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                      className="mr-2"
                      required
                    />
                    Homme
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="femme"
                      checked={formData.gender === 'femme'}
                      onChange={e => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                      className="mr-2"
                      required
                    />
                    Femme
                  </label>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium"
          >
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuthForm;
