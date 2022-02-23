import React from 'react'

import { PublicLayout } from '../pages/PublicLayout'
import { HomePublic } from '../pages/PublicLayout/HomePublic'
import { AboutUsPublic } from '../pages/PublicLayout/AboutUsPublic'
import { ActivitiesList } from '../pages/PublicLayout/ActivitiesPublic/ActivitiesList'
import { NewsPublic } from '../pages/PublicLayout/NewsPublic/index'
import { TestimoniesPublic } from '../pages/PublicLayout/TestimoniesPublic/TestimoniesPublic'
import { ContactPublic } from '../pages/PublicLayout/ContactPublic/index'
import { DonationPublic } from '../pages/PublicLayout/DonationPublic/DonationPublic'
import { CampaignsPublic } from '../pages/PublicLayout/CampaignsPublic/idex'
import { HomeSchoolCampaign } from '../pages/PublicLayout/CampaignsPublic/SchoolCampaign/HomeSchoolCampaign'
import { CampaignsLayout } from '../pages/PublicLayout/CampaignsPublic/CampaignsLayout'
import { HomeToysCampaign } from '../pages/PublicLayout/CampaignsPublic/ToysCampaign/HomeToysCampaign'
import { LogIn } from '../pages/PublicLayout/LogIn/index'
import { Register } from '../pages/PublicLayout/Register/index'
import { NewsDetailPublic } from '../pages/PublicLayout/NewsDetailPublic/NewsDetailPublic'
import { ActivitiesDetail } from '../pages/PublicLayout/ActivitiesPublic/ActivitiesDetail'

import { BackOfficeLayout } from '../pages/PrivateLayout/index'
import { HomeBackOffice } from '../pages/PrivateLayout/HomeBackOffice/HomeBackOffice'
import { ActivitiesBackOffice } from '../pages/PrivateLayout/ActivitiesBackOffice/ActivitiesBackOffice'
import { CreateActivitiesBackOffice } from '../pages/PrivateLayout/CreateActivitiesBackOffice'
import { MembersBackOffice } from '../pages/PrivateLayout/MembersBackOffice/MembersBackOffice'
import { CreateMemberBackOffice } from '../pages/PrivateLayout/CreateMemberBackOffice/idex'
import { OrganizationBackOffice } from '../pages/PrivateLayout/OrganizationBackOffice/OrganizationBackOffice'
import { EditOrganizationBackOffice } from '../pages/PrivateLayout/EditOrganizationBackOffice/index'
import { UsersBackOffice } from '../pages/PrivateLayout/UsersBackOffice/UsersBackOffice'
import { CreateUserBackOffice } from '../pages/PrivateLayout/CreateUsersBackOffice/index'

import { Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePublic />} />
        <Route path="nosotros" element={<AboutUsPublic />} />

        <Route path="actividades" element={<ActivitiesList />} />
        <Route path="actividades/:actsId" element={<ActivitiesDetail />} />

        <Route path="novedades" element={<NewsPublic />} />
        <Route path="/novedades/:newsId" element={<NewsDetailPublic />} />

        <Route path="testimonios" element={<TestimoniesPublic />} />
        <Route path="contacto" element={<ContactPublic />} />
        <Route path="contribuye" element={<DonationPublic />} />
        <Route path="campaigns" element={<CampaignsPublic />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<CampaignsLayout />}>
        <Route
          path="/campaigns/school-campaign"
          element={<HomeSchoolCampaign />}
        />
        <Route path="/campaigns/toys-campaign" element={<HomeToysCampaign />} />
      </Route>

      <Route path="/backoffice" element={<BackOfficeLayout />}>
        <Route index element={<HomeBackOffice />} />

        <Route path="actividades" element={<ActivitiesBackOffice />} />
        <Route
          path="actividades/crear"
          element={<CreateActivitiesBackOffice />}
        />
        <Route
          path="actividades/crear/:id"
          element={<CreateActivitiesBackOffice />}
        />

        <Route path="miembros" element={<MembersBackOffice />} />
        <Route path="miembros/crear" element={<CreateMemberBackOffice />} />
        <Route path="miembros/crear/:id" element={<CreateMemberBackOffice />} />

        <Route path="organizacion" element={<OrganizationBackOffice />} />
        <Route
          path="organizacion/editar"
          element={<EditOrganizationBackOffice />}
        />

        <Route path="usuarios" element={<UsersBackOffice />} />
        <Route path="usuarios/crear" element={<CreateUserBackOffice />} />
        <Route path="usuarios/crear/:id" element={<CreateUserBackOffice />} />
      </Route>
    </Routes>
  )
}

//  {/* Routes nest inside one another. Nested route paths build upon
//             parent route paths, and nested route elements render inside
//             parent route elements. See the note about <Outlet> below. */}
//             <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route index element={<Home />} />
//               <Route path="about" element={<About />} />
//               <Route path="dashboard" element={<Dashboard />} />

//               {/* Using path="*"" means "match anything", so this route
//                     acts like a catch-all for URLs that we don't have explicit
//                     routes for. */}
//               <Route path="*" element={<NoMatch />} />
//             </Route>
//           </Routes>
