# Инсталација *Oracle SQLDeveloper* клијентске апликације и повезивање са базом података

## Инсталација на :material-microsoft: *Windows* платформи

1. Преузимте *Windows 64-bit with JDK 17 included* пакет програма са [званичног сајта за преузимање](https://www.oracle.com/database/sqldeveloper/technologies/download/).
![](../../assets/img/oracle-sqldeveloper/win-download.png#no-invert)
1. Одпакујте :material-folder-zip-outline: *ZIP* архиву. Препоручено је као дестинацију да изабаберете саму партицију `C:\`.
![](../../assets/img/oracle-sqldeveloper/extract.png#no-invert)
![](../../assets/img/oracle-sqldeveloper/extract-destination.png#no-invert)
1. Отворите одпакован директоријум под називом `sqldeveloper`, у њему лоцирајте `sqldeveloper.exe` извршну датотеку и направите линк на *Desktop*-у ради лакшег приступа.
![](../../assets/img/oracle-sqldeveloper/open-folder.png#no-invert)
![](../../assets/img/oracle-sqldeveloper/send-to-desktop.png#no-invert)
1. Покрените Oracle SQLDeveloper апликацију преко ново-направљене пречице на *Desktop*-у.
![](../../assets/img/oracle-sqldeveloper/desktop.png#no-invert)

## Инсталација на :material-apple: *macOS* платформи

1. Преузмите пакет програма за тип процесора/чипа који Ваш Мекинтош рачунар поседује [званичног сајта за преузимање](https://www.oracle.com/database/sqldeveloper/technologies/download/).
![](../../assets/img/oracle-sqldeveloper/about-this-mac.png#no-invert)
![](../../assets/img/oracle-sqldeveloper/mac-download.png#no-invert)
1. Одпакујте :material-folder-zip-outline: *ZIP* архиву дуплим кликом на њу, потом превуците одпакован *SQLDeveloper* у *Applications* директоријум.
![](../../assets/img/oracle-sqldeveloper/mac-install.png#no-invert)

## Инсталација на :material-linux: *Linux* платформи

TODO

## Повезивање на локални сервер базе података

Да бисмо могли да приступимо бази података у којој можемо да слободно правимо табеле, потребно је да је направимо. У *Oracle Database DBMS*-у база података (односно шема базе података, енг. *schema*) је исто што и кориснички налог. Дакле, потребно је да направимо прво кориснички налог базе података за коју желимо да правимо табеле, уписујемо и читамо податке.

Корисничке налоге можемо направити пријављивањем на системски налог направљен током инсталације сервера базе података.

Отварањем *Oracle SQLDeveloper* апликације, додајемо конекцију ка бази података кликом на зенело дугме плус у горњем левом углу прозора.

![](../../assets/img/oracle-sqldeveloper/new-connection.png#no-invert)

У пољу *Name* унесите неко симболичко име које ће Вас асоцирати на конекцију ка бази података са системским налогом.

У пољу *Username* унесите **sys** за системски налог, а у пољу *Password* унесите лозинку коју сте поставили током инсталације сервера базе података. Из падајуће листе *Role* изабрати **SYSDBA**. Такође препоручљиво је да чекирате *Save password* бокс како не бисте морали стално да уносите лозинку при сваком повезивању.

*Hostname* оставити на почетни **localhost**, као и поље *Port* на **1521**. Изабрати опцију *Service name* и затим поред написати **FREEPDB1**.

Кликом на дугме *Test* проверавамо да ли смо информације усправно унели и уколико се појави порука *Status: Success* можемо даље наставти конектовањем кликом на *Connect*. У супротном уколико Вам се уместо тога јави грешка, вероватно сте негде направили грешку или откуцачи лозинку погрешно.

![](../../assets/img/oracle-sqldeveloper/sys-connect.png#no-invert)

Уколико је повезивање успешно отвориће Вам се картица за писање *SQL* наредби, док ће у углу иконице конекције базе података :material-database: бити приказана иконица прикључка :octicons-plug-16: да индикује отворену конекцију.

![](../../assets/img/oracle-sqldeveloper/conn-open-interface.png#no-invert)
![](../../assets/img/oracle-sqldeveloper/sys-connected.png#no-invert)

Међутим, уколико то није случај или желите да се повежете поново након поновног отварања програма, двапут кликните на назив конекције да успоставите везу поново.

![](../../assets/img/oracle-sqldeveloper/sys-to-connect.png#no-invert)

Да бисмо направили нови кориснички налог поред назива конекције кликнемо на плусић да би се отворила листа објеката који постоје у серверу базе података. Нама су од интереса корисници, те десним кликом на опцију *Other Users* приступамо управо опцији *Create User*.

![](../../assets/img/oracle-sqldeveloper/sys-expand.png#no-invert)
![](../../assets/img/oracle-sqldeveloper/create-user.png#no-invert)

Унесите податке за нови кориснички налог.

![](../../assets/img/oracle-sqldeveloper/create-user-user.png#no-invert)

Затим, у картици *System Privileges* под колоном *Granted* чекирати бокс за следеће привилегије: **CREATE PROCEDURE**, **CREATE SEQUENCE**, **CREATE SESSION**, **CREATE TABLE**, **CREATE VIEW**. Ове привилегије даће минималне неопходне дозволе за неометан рад над базом података.

![](../../assets/img/oracle-sqldeveloper/create-user-privileges.png#no-invert)

Под картицом *Quotas* доделити новом корисничком налогу неограничену квоту у **USERS** табеларном простору.

![](../../assets/img/oracle-sqldeveloper/create-user-quotas.png#no-invert)

Напокон у картици *SQL* можемо и видети генерисане SQL наредбе којима ће се направити кориснички налог и додати му сва претходно дефинисана права приступа. Да бисмо заправо сада и направили овај налог, кликнемо на дугме *Apply*.

![](../../assets/img/oracle-sqldeveloper/create-user-sql.png#no-invert)

Отвориће се бокс поруке да је операције успешно изврешена, затварамо је притиском на *OK*.

![](../../assets/img/oracle-sqldeveloper/create-user-success.png#no-invert)


### Приступ корисничком налогу

Сада се можемо пријавити на кориснички налог, односно приступити ново-направљеној бази података и у оквиру ње правити табеле и извршавати упите над њима.

## Повезивање на факултетски сервер базе података


