﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.SPeerechisleniem
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Накладная.
    /// </summary>
    // *** Start programmer edit section *** (Накладная CustomAttributes)

    // *** End programmer edit section *** (Накладная CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НакладнаяE", new string[] {
            "ТипНакл as \'Тип накл\'",
            "Ответственный as \'Ответственный\'",
            "Ответственный.Фамилия as \'Фамилия\'"}, Hidden=new string[] {
            "Ответственный.Фамилия"})]
    [MasterViewDefineAttribute("НакладнаяE", "Ответственный", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [View("НакладнаяL", new string[] {
            "ТипНакл as \'Тип накл\'",
            "Ответственный.Фамилия as \'Фамилия\'"})]
    public class Накладная : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.SPeerechisleniem.ТипНакл fТипНакл;
        
        private IIS.SPeerechisleniem.Ответственный fОтветственный;
        
        // *** Start programmer edit section *** (Накладная CustomMembers)

        // *** End programmer edit section *** (Накладная CustomMembers)

        
        /// <summary>
        /// ТипНакл.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.ТипНакл CustomAttributes)

        // *** End programmer edit section *** (Накладная.ТипНакл CustomAttributes)
        public virtual IIS.SPeerechisleniem.ТипНакл ТипНакл
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.ТипНакл Get start)

                // *** End programmer edit section *** (Накладная.ТипНакл Get start)
                IIS.SPeerechisleniem.ТипНакл result = this.fТипНакл;
                // *** Start programmer edit section *** (Накладная.ТипНакл Get end)

                // *** End programmer edit section *** (Накладная.ТипНакл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.ТипНакл Set start)

                // *** End programmer edit section *** (Накладная.ТипНакл Set start)
                this.fТипНакл = value;
                // *** Start programmer edit section *** (Накладная.ТипНакл Set end)

                // *** End programmer edit section *** (Накладная.ТипНакл Set end)
            }
        }
        
        /// <summary>
        /// Накладная.
        /// </summary>
        // *** Start programmer edit section *** (Накладная.Ответственный CustomAttributes)

        // *** End programmer edit section *** (Накладная.Ответственный CustomAttributes)
        [PropertyStorage(new string[] {
                "Ответственный"})]
        [NotNull()]
        public virtual IIS.SPeerechisleniem.Ответственный Ответственный
        {
            get
            {
                // *** Start programmer edit section *** (Накладная.Ответственный Get start)

                // *** End programmer edit section *** (Накладная.Ответственный Get start)
                IIS.SPeerechisleniem.Ответственный result = this.fОтветственный;
                // *** Start programmer edit section *** (Накладная.Ответственный Get end)

                // *** End programmer edit section *** (Накладная.Ответственный Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Накладная.Ответственный Set start)

                // *** End programmer edit section *** (Накладная.Ответственный Set start)
                this.fОтветственный = value;
                // *** Start programmer edit section *** (Накладная.Ответственный Set end)

                // *** End programmer edit section *** (Накладная.Ответственный Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НакладнаяE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НакладнаяE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НакладнаяE", typeof(IIS.SPeerechisleniem.Накладная));
                }
            }
            
            /// <summary>
            /// "НакладнаяL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НакладнаяL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НакладнаяL", typeof(IIS.SPeerechisleniem.Накладная));
                }
            }
        }
    }
}
