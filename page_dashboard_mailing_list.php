<?php

session_start();
 $nom=$_SESSION['login'];
if(!isset($_SESSION['login'])){
    header('Location:page_connection_backoffice.php');
    exit();
}
 //session_destroy();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style_dashboard_mailing_list.css">
    <script src="JS/script_liste_mail_ajax.js" defer></script>
</head>
<body>

    <header>
<h3>Hr.GIGER<br>MUSEUM</h2>
<h2>Newletter Mailing list</h3>

<div id="div_header">

    <a id="log-out" href='logout.php'>Log Out </a>
<a id="csv" href='export_csv.php'><button >Export CSV</button></a>
</div>


    </header>
    <aside>
        <div>
            <form id="form" novalidate>

                <input type="search" name="search">
                <button id="rechercher">Rechercher</button>
                <button class="refresh">Supprimer Filtres</button>
            </form>

        </div>


    </aside>
    <div class="element_principal">




            <div class="tableau">
                <table>

                    <thead>
                       <th width="40%">Mail<svg id="order_mail" data_value="order_mail" width="10" height="10" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75567 16.4797C9.53267 17.6882 11.4087 17.6882 12.1857 16.4797L20.6537 3.29981C21.4537 2.05494 20.4937 0.471077 18.9387 0.471077H2.00267C0.448671 0.471077 -0.511329 2.05494 0.287671 3.29981L8.75567 16.4797Z" fill="#F8F8F8"/>
                        </svg></th>
                       <th width="40%">Subscribe<svg id="order_date" data_value="order_date" width="10" height="10" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75567 16.4797C9.53267 17.6882 11.4087 17.6882 12.1857 16.4797L20.6537 3.29981C21.4537 2.05494 20.4937 0.471077 18.9387 0.471077H2.00267C0.448671 0.471077 -0.511329 2.05494 0.287671 3.29981L8.75567 16.4797Z" fill="#F8F8F8"/>
                        </svg></th>
                       <th width="20%">Unsubscribe</th>
                    </thead>
                    <tbody id="tableauSelection">
                    
                    </tbody>


                </table>
                <button id="show_more">Show more</button><p id="p_nbr"><span id="actual_liste"></span>/<span id="total_liste"></span></p>




                <template id="mailList">
                    <tr class="lignes">
                        <td class="td0"></td>
                        <td class="td1"></td>
                        <td class="btn_suppr"><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75 7.5C5.75 5.64348 6.4875 3.86301 7.80025 2.55025C9.11301 1.2375 10.8935 0.5 12.75 0.5C14.6065 0.5 16.387 1.2375 17.6997 2.55025C19.0125 3.86301 19.75 5.64348 19.75 7.5C19.75 9.35652 19.0125 11.137 17.6997 12.4497C16.387 13.7625 14.6065 14.5 12.75 14.5C10.8935 14.5 9.11301 13.7625 7.80025 12.4497C6.4875 11.137 5.75 9.35652 5.75 7.5V7.5ZM12.75 2.25C11.3576 2.25 10.0223 2.80312 9.03769 3.78769C8.05312 4.77226 7.5 6.10761 7.5 7.5C7.5 8.89239 8.05312 10.2277 9.03769 11.2123C10.0223 12.1969 11.3576 12.75 12.75 12.75C14.1424 12.75 15.4777 12.1969 16.4623 11.2123C17.4469 10.2277 18 8.89239 18 7.5C18 6.10761 17.4469 4.77226 16.4623 3.78769C15.4777 2.80312 14.1424 2.25 12.75 2.25ZM0.5 19.75C0.5 17.8022 2.08025 16.25 4.01575 16.25H14.9497C14.504 16.7898 14.1185 17.3766 13.8 18H4.01575C3.034 18 2.25 18.7823 2.25 19.75C2.25 22.0408 3.3385 23.747 5.17775 24.9178C7.05025 26.113 9.71375 26.75 12.75 26.75C13.1 26.75 13.4465 26.7413 13.786 26.7238C14.0888 27.3223 14.4528 27.8823 14.8675 28.4003C14.1763 28.4668 13.4675 28.5 12.75 28.5C9.50375 28.5 6.47975 27.8245 4.23625 26.3948C1.95775 24.9423 0.5 22.7075 0.5 19.75ZM30.25 22.375C30.25 24.4636 29.4203 26.4666 27.9435 27.9435C26.4666 29.4203 24.4636 30.25 22.375 30.25C20.2864 30.25 18.2834 29.4203 16.8065 27.9435C15.3297 26.4666 14.5 24.4636 14.5 22.375C14.5 20.2864 15.3297 18.2834 16.8065 16.8065C18.2834 15.3297 20.2864 14.5 22.375 14.5C24.4636 14.5 26.4666 15.3297 27.9435 16.8065C29.4203 18.2834 30.25 20.2864 30.25 22.375V22.375ZM25.6195 20.3695C25.7838 20.2052 25.8761 19.9824 25.8761 19.75C25.8761 19.5176 25.7838 19.2948 25.6195 19.1305C25.4552 18.9662 25.2324 18.8739 25 18.8739C24.7676 18.8739 24.5448 18.9662 24.3805 19.1305L22.375 21.1378L20.3695 19.1305C20.2052 18.9662 19.9824 18.8739 19.75 18.8739C19.5176 18.8739 19.2948 18.9662 19.1305 19.1305C18.9662 19.2948 18.8739 19.5176 18.8739 19.75C18.8739 19.9824 18.9662 20.2052 19.1305 20.3695L21.1378 22.375L19.1305 24.3805C19.0491 24.4619 18.9846 24.5584 18.9406 24.6647C18.8966 24.771 18.8739 24.8849 18.8739 25C18.8739 25.1151 18.8966 25.229 18.9406 25.3353C18.9846 25.4416 19.0491 25.5381 19.1305 25.6195C19.2119 25.7009 19.3084 25.7654 19.4147 25.8094C19.521 25.8534 19.6349 25.8761 19.75 25.8761C19.8651 25.8761 19.979 25.8534 20.0853 25.8094C20.1916 25.7654 20.2881 25.7009 20.3695 25.6195L22.375 23.6122L24.3805 25.6195C24.4619 25.7009 24.5584 25.7654 24.6647 25.8094C24.771 25.8534 24.8849 25.8761 25 25.8761C25.1151 25.8761 25.229 25.8534 25.3353 25.8094C25.4416 25.7654 25.5381 25.7009 25.6195 25.6195C25.7009 25.5381 25.7654 25.4416 25.8094 25.3353C25.8534 25.229 25.8761 25.1151 25.8761 25C25.8761 24.8849 25.8534 24.771 25.8094 24.6647C25.7654 24.5584 25.7009 24.4619 25.6195 24.3805L23.6122 22.375L25.6195 20.3695Z" fill="#F8F8F8"/>
</svg></td>
                    </tr>

                </template>


                <template id="confirmation">
                    <div id="container_confirmation_flex">
                        <div id="div_confirmation">
                            <p id="p_conf">Voulez-vous vraiment supprimer <span id="span_mail"></span>?</p>
                            <div id="div_button">
                                <button id="button_yes">OUI</button>
                                <button id="button_no">NON</button>
                            </div>
                        </div>

                    </div>
                </template>

                <div id="snackbar"></div>


            </div>


        </div>
    </div>
</body>
</html>