<?php
 include_once ($_SERVER[DOCUMENT_ROOT]."/INC/header.php");

    $mode = escape_string($_REQUEST['mode']);
	$reg_date = date("Y-m-d H:i:s");

    switch( $mode ){ // ######################################################   

		case "product_option_add" :	// 옵션추가
			
			$arrData['optionType'] = escape_string($_REQUEST['optionType']);
			$arrData['optionName'] = escape_string($_REQUEST['optionName']);

			$query1 = "select max(sortnum) from tb_checklist where optionType='".$arrData['optionType']."'" ;
			$max_sortnum =  $db->select_one( $query1 );
			if(!$max_sortnum) $max_sortnum = 0;
			$max_sortnum++;
			$arrData['sortnum'] = $max_sortnum;

			$query = MakeQueryField($arrData);
			if($query){
				$result = $db->query("insert tb_checklist set $query");
			}
			$query1 = "select max(uid) from tb_checklist" ;
			$max_uid =  $db->select_one( $query1 );

			exit(json_encode(array('code' => $result, 'max_uid' => $max_uid)));

		break;


		
		case "product_option_complete" :	// 완료처리
			
			$uid = escape_string($_REQUEST['uid']);
			$arrData['complete'] = escape_string($_REQUEST['complete']);
			$arrData['uname'] = escape_string($_REQUEST['uname']);
			$result = $db->query("update tb_checklist set complete='".$arrData['complete']."', uname='".$arrData['uname']."', mod_date='".$reg_date."' where uid='".$uid."' ");
			if($arrData['complete']=="Y") $code = "1";
			else $code = "2";
			exit(json_encode(array('code' => $code, 'uname' => $arrData['uname'])));

		break;

		case "product_option_modi" :	// 수정
			
			$uid = escape_string($_REQUEST['uid']);
			$arrData['optionName'] = escape_string($_REQUEST['optionName']);
			$result = $db->query("update tb_checklist set optionName='".$arrData['optionName']."',complete='N', uname='', mod_date='".$reg_date."'  where uid='".$uid."' ");

			exit(json_encode(array('code' => $result, 'uid' => $uid)));

		break;

		
		
		
		case "product_option_del" :	// 삭제
			
			$uid = escape_string($_REQUEST['uid']);
			$result = $db->query("delete from  tb_checklist where uid='".$uid."' ");

			exit(json_encode(array('code' => $result, 'uid' => $uid)));

		break;

		
		case "sortchange" :	// 순서변경
		

			$i=0;
			while($uid[$i]) {
				$query = "UPDATE tb_checklist SET sortnum='$i' where uid='$uid[$i]'";
				$result = $db->query($query);
				$i++;
			}
			exit(json_encode(array('code' => 1, 'query' => $query)));

		break;


		case "complete" :						
			$indexurl = escape_string($_REQUEST['indexurl']);
			$uname = escape_string($_REQUEST['uname']);
			
			$query = "UPDATE tb_checklist SET complete='Y',uname='$uname' where optionType='9'";
			$result = $db->query($query);
			$indexfile = fopen("../index.html","w");
			
$indexdata ='<?
header("Location: '.$indexurl.'");
?>';
			fwrite($indexfile,$indexdata);
			fclose($indexfile);
			
				$common->error("index 페이지가 생성되었습니다.","goto","/checklist/");
		break;
    } //switch end 
?>
